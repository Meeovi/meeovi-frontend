import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCreateManyTagInputEnvelope } from "../inputs/Product_tagCreateManyTagInputEnvelope";
import { Product_tagCreateOrConnectWithoutTagInput } from "../inputs/Product_tagCreateOrConnectWithoutTagInput";
import { Product_tagCreateWithoutTagInput } from "../inputs/Product_tagCreateWithoutTagInput";
import { Product_tagScalarWhereInput } from "../inputs/Product_tagScalarWhereInput";
import { Product_tagUpdateManyWithWhereWithoutTagInput } from "../inputs/Product_tagUpdateManyWithWhereWithoutTagInput";
import { Product_tagUpdateWithWhereUniqueWithoutTagInput } from "../inputs/Product_tagUpdateWithWhereUniqueWithoutTagInput";
import { Product_tagUpsertWithWhereUniqueWithoutTagInput } from "../inputs/Product_tagUpsertWithWhereUniqueWithoutTagInput";
import { Product_tagWhereUniqueInput } from "../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.InputType("Product_tagUpdateManyWithoutTagNestedInput", {})
export class Product_tagUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [Product_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Product_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Product_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: Product_tagUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Product_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Product_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: Product_tagUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: Product_tagUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_tagScalarWhereInput[] | undefined;
}
