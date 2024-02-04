import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutProduct_categoryInput } from "../inputs/CategoryUpdateWithoutProduct_categoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutProduct_categoryInput", {})
export class CategoryUpdateToOneWithWhereWithoutProduct_categoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProduct_categoryInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutProduct_categoryInput;
}
