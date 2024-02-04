import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutMain_categoryInput } from "../inputs/CategoryUpdateWithoutMain_categoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutMain_categoryInput", {})
export class CategoryUpdateToOneWithWhereWithoutMain_categoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutMain_categoryInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutMain_categoryInput;
}
