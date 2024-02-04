import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutProduct_categoryInput } from "../inputs/CategoryCreateWithoutProduct_categoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutProduct_categoryInput", {})
export class CategoryCreateOrConnectWithoutProduct_categoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutProduct_categoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutProduct_categoryInput;
}
