import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_reviewWhereInput } from "../../../inputs/Product_reviewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_reviewArgs {
  @TypeGraphQL.Field(_type => Product_reviewWhereInput, {
    nullable: true
  })
  where?: Product_reviewWhereInput | undefined;
}
