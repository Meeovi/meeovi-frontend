import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutMain_categoryInput } from "../inputs/CategoryCreateWithoutMain_categoryInput";
import { CategoryUpdateWithoutMain_categoryInput } from "../inputs/CategoryUpdateWithoutMain_categoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutMain_categoryInput", {})
export class CategoryUpsertWithoutMain_categoryInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutMain_categoryInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutMain_categoryInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutMain_categoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutMain_categoryInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
