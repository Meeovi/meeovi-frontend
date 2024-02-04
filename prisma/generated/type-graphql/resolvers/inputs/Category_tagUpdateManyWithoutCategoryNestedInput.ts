import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagCreateManyCategoryInputEnvelope } from "../inputs/Category_tagCreateManyCategoryInputEnvelope";
import { Category_tagCreateOrConnectWithoutCategoryInput } from "../inputs/Category_tagCreateOrConnectWithoutCategoryInput";
import { Category_tagCreateWithoutCategoryInput } from "../inputs/Category_tagCreateWithoutCategoryInput";
import { Category_tagScalarWhereInput } from "../inputs/Category_tagScalarWhereInput";
import { Category_tagUpdateManyWithWhereWithoutCategoryInput } from "../inputs/Category_tagUpdateManyWithWhereWithoutCategoryInput";
import { Category_tagUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/Category_tagUpdateWithWhereUniqueWithoutCategoryInput";
import { Category_tagUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/Category_tagUpsertWithWhereUniqueWithoutCategoryInput";
import { Category_tagWhereUniqueInput } from "../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.InputType("Category_tagUpdateManyWithoutCategoryNestedInput", {})
export class Category_tagUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => [Category_tagCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Category_tagCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Category_tagCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: Category_tagUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_tagCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Category_tagCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Category_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Category_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Category_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Category_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: Category_tagUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: Category_tagUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Category_tagScalarWhereInput[] | undefined;
}
