import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCreateManyTagInputEnvelope } from "../inputs/Order_tagCreateManyTagInputEnvelope";
import { Order_tagCreateOrConnectWithoutTagInput } from "../inputs/Order_tagCreateOrConnectWithoutTagInput";
import { Order_tagCreateWithoutTagInput } from "../inputs/Order_tagCreateWithoutTagInput";
import { Order_tagScalarWhereInput } from "../inputs/Order_tagScalarWhereInput";
import { Order_tagUpdateManyWithWhereWithoutTagInput } from "../inputs/Order_tagUpdateManyWithWhereWithoutTagInput";
import { Order_tagUpdateWithWhereUniqueWithoutTagInput } from "../inputs/Order_tagUpdateWithWhereUniqueWithoutTagInput";
import { Order_tagUpsertWithWhereUniqueWithoutTagInput } from "../inputs/Order_tagUpsertWithWhereUniqueWithoutTagInput";
import { Order_tagWhereUniqueInput } from "../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.InputType("Order_tagUpdateManyWithoutTagNestedInput", {})
export class Order_tagUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [Order_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Order_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Order_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: Order_tagUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Order_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Order_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: Order_tagUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: Order_tagUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_tagScalarWhereInput[] | undefined;
}
