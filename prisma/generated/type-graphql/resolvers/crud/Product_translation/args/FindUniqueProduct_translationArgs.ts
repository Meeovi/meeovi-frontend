import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_translationWhereUniqueInput } from "../../../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_translationArgs {
  @TypeGraphQL.Field(_type => Product_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_translationWhereUniqueInput;
}
