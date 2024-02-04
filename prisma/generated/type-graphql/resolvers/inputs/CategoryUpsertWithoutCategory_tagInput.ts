import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutCategory_tagInput } from "../inputs/CategoryCreateWithoutCategory_tagInput";
import { CategoryUpdateWithoutCategory_tagInput } from "../inputs/CategoryUpdateWithoutCategory_tagInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutCategory_tagInput", {})
export class CategoryUpsertWithoutCategory_tagInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutCategory_tagInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutCategory_tagInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategory_tagInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutCategory_tagInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
