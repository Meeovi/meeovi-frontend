import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationCreateManyProductInputEnvelope } from "../inputs/Product_translationCreateManyProductInputEnvelope";
import { Product_translationCreateOrConnectWithoutProductInput } from "../inputs/Product_translationCreateOrConnectWithoutProductInput";
import { Product_translationCreateWithoutProductInput } from "../inputs/Product_translationCreateWithoutProductInput";
import { Product_translationScalarWhereInput } from "../inputs/Product_translationScalarWhereInput";
import { Product_translationUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_translationUpdateManyWithWhereWithoutProductInput";
import { Product_translationUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_translationUpdateWithWhereUniqueWithoutProductInput";
import { Product_translationUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_translationUpsertWithWhereUniqueWithoutProductInput";
import { Product_translationWhereUniqueInput } from "../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_translationUpdateManyWithoutProductNestedInput", {})
export class Product_translationUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_translationCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_translationCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_translationCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_translationUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_translationCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_translationCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_translationUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_translationUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_translationScalarWhereInput[] | undefined;
}
