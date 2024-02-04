import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_tagWhereInput } from "../../../inputs/Product_tagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_tagArgs {
  @TypeGraphQL.Field(_type => Product_tagWhereInput, {
    nullable: true
  })
  where?: Product_tagWhereInput | undefined;
}
