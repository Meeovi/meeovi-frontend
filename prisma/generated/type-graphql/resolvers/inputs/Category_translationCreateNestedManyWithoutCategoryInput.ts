import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationCreateManyCategoryInputEnvelope } from "../inputs/Category_translationCreateManyCategoryInputEnvelope";
import { Category_translationCreateOrConnectWithoutCategoryInput } from "../inputs/Category_translationCreateOrConnectWithoutCategoryInput";
import { Category_translationCreateWithoutCategoryInput } from "../inputs/Category_translationCreateWithoutCategoryInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationCreateNestedManyWithoutCategoryInput", {})
export class Category_translationCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [Category_translationCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Category_translationCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Category_translationCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_translationCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Category_translationCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Category_translationWhereUniqueInput[] | undefined;
}
