import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutCms_pageInput } from "../inputs/CategoryUpdateWithoutCms_pageInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutCms_pageInput", {})
export class CategoryUpdateWithWhereUniqueWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutCms_pageInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutCms_pageInput;
}
