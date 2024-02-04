import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutProduct_categoryInput } from "../inputs/CategoryCreateWithoutProduct_categoryInput";
import { CategoryUpdateWithoutProduct_categoryInput } from "../inputs/CategoryUpdateWithoutProduct_categoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutProduct_categoryInput", {})
export class CategoryUpsertWithoutProduct_categoryInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProduct_categoryInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutProduct_categoryInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutProduct_categoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutProduct_categoryInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
