import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_downloadWhereUniqueInput } from "../../../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProduct_downloadArgs {
  @TypeGraphQL.Field(_type => Product_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Product_downloadWhereUniqueInput;
}
