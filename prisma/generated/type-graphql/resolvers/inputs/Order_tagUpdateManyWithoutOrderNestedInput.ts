import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCreateManyOrderInputEnvelope } from "../inputs/Order_tagCreateManyOrderInputEnvelope";
import { Order_tagCreateOrConnectWithoutOrderInput } from "../inputs/Order_tagCreateOrConnectWithoutOrderInput";
import { Order_tagCreateWithoutOrderInput } from "../inputs/Order_tagCreateWithoutOrderInput";
import { Order_tagScalarWhereInput } from "../inputs/Order_tagScalarWhereInput";
import { Order_tagUpdateManyWithWhereWithoutOrderInput } from "../inputs/Order_tagUpdateManyWithWhereWithoutOrderInput";
import { Order_tagUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/Order_tagUpdateWithWhereUniqueWithoutOrderInput";
import { Order_tagUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/Order_tagUpsertWithWhereUniqueWithoutOrderInput";
import { Order_tagWhereUniqueInput } from "../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.InputType("Order_tagUpdateManyWithoutOrderNestedInput", {})
export class Order_tagUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [Order_tagCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_tagCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_tagCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: Order_tagUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_tagCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_tagCreateManyOrderInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_tagUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: Order_tagUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: Order_tagUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_tagScalarWhereInput[] | undefined;
}
