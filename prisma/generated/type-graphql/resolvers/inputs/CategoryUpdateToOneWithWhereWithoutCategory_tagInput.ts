import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutCategory_tagInput } from "../inputs/CategoryUpdateWithoutCategory_tagInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutCategory_tagInput", {})
export class CategoryUpdateToOneWithWhereWithoutCategory_tagInput {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutCategory_tagInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutCategory_tagInput;
}
