import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryCreateManyCategoryInputEnvelope } from "../inputs/Product_categoryCreateManyCategoryInputEnvelope";
import { Product_categoryCreateOrConnectWithoutCategoryInput } from "../inputs/Product_categoryCreateOrConnectWithoutCategoryInput";
import { Product_categoryCreateWithoutCategoryInput } from "../inputs/Product_categoryCreateWithoutCategoryInput";
import { Product_categoryScalarWhereInput } from "../inputs/Product_categoryScalarWhereInput";
import { Product_categoryUpdateManyWithWhereWithoutCategoryInput } from "../inputs/Product_categoryUpdateManyWithWhereWithoutCategoryInput";
import { Product_categoryUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/Product_categoryUpdateWithWhereUniqueWithoutCategoryInput";
import { Product_categoryUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/Product_categoryUpsertWithWhereUniqueWithoutCategoryInput";
import { Product_categoryWhereUniqueInput } from "../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Product_categoryUpdateManyWithoutCategoryNestedInput", {})
export class Product_categoryUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => [Product_categoryCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Product_categoryCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Product_categoryCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: Product_categoryUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_categoryCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Product_categoryCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  set?: Product_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: Product_categoryUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: Product_categoryUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_categoryScalarWhereInput[] | undefined;
}
