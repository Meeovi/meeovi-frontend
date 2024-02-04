import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_tagWhereUniqueInput } from "../../../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_tagArgs {
  @TypeGraphQL.Field(_type => Product_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Product_tagWhereUniqueInput;
}
