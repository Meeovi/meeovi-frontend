import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_mediaWhereInput } from "../../../inputs/Product_mediaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_mediaArgs {
  @TypeGraphQL.Field(_type => Product_mediaWhereInput, {
    nullable: true
  })
  where?: Product_mediaWhereInput | undefined;
}
