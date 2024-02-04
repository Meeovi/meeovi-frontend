import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_reviewWhereUniqueInput } from "../../../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_reviewOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;
}
