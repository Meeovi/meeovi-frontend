import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagCreateManyCategoryInputEnvelope } from "../inputs/Category_tagCreateManyCategoryInputEnvelope";
import { Category_tagCreateOrConnectWithoutCategoryInput } from "../inputs/Category_tagCreateOrConnectWithoutCategoryInput";
import { Category_tagCreateWithoutCategoryInput } from "../inputs/Category_tagCreateWithoutCategoryInput";
import { Category_tagWhereUniqueInput } from "../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.InputType("Category_tagCreateNestedManyWithoutCategoryInput", {})
export class Category_tagCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [Category_tagCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Category_tagCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Category_tagCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_tagCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Category_tagCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Category_tagWhereUniqueInput[] | undefined;
}
