import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutCategoryInput } from "../inputs/Cms_pageCreateOrConnectWithoutCategoryInput";
import { Cms_pageCreateWithoutCategoryInput } from "../inputs/Cms_pageCreateWithoutCategoryInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateNestedOneWithoutCategoryInput", {})
export class Cms_pageCreateNestedOneWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCategoryInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutCategoryInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput | undefined;
}
