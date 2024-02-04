import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutCategory_translationInput } from "../inputs/CategoryCreateWithoutCategory_translationInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutCategory_translationInput", {})
export class CategoryCreateOrConnectWithoutCategory_translationInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategory_translationInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutCategory_translationInput;
}
