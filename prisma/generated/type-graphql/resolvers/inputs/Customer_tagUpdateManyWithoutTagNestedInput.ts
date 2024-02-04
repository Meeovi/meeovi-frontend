import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCreateManyTagInputEnvelope } from "../inputs/Customer_tagCreateManyTagInputEnvelope";
import { Customer_tagCreateOrConnectWithoutTagInput } from "../inputs/Customer_tagCreateOrConnectWithoutTagInput";
import { Customer_tagCreateWithoutTagInput } from "../inputs/Customer_tagCreateWithoutTagInput";
import { Customer_tagScalarWhereInput } from "../inputs/Customer_tagScalarWhereInput";
import { Customer_tagUpdateManyWithWhereWithoutTagInput } from "../inputs/Customer_tagUpdateManyWithWhereWithoutTagInput";
import { Customer_tagUpdateWithWhereUniqueWithoutTagInput } from "../inputs/Customer_tagUpdateWithWhereUniqueWithoutTagInput";
import { Customer_tagUpsertWithWhereUniqueWithoutTagInput } from "../inputs/Customer_tagUpsertWithWhereUniqueWithoutTagInput";
import { Customer_tagWhereUniqueInput } from "../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.InputType("Customer_tagUpdateManyWithoutTagNestedInput", {})
export class Customer_tagUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [Customer_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Customer_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Customer_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: Customer_tagUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: Customer_tagUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: Customer_tagUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_tagScalarWhereInput[] | undefined;
}
