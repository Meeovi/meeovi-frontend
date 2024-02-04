import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_visibilityWhereUniqueInput } from "../../../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_visibilityArgs {
  @TypeGraphQL.Field(_type => Product_visibilityWhereUniqueInput, {
    nullable: false
  })
  where!: Product_visibilityWhereUniqueInput;
}
