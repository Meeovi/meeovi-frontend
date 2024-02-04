import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_downloadUpdateInput } from "../../../inputs/Product_downloadUpdateInput";
import { Product_downloadWhereUniqueInput } from "../../../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_downloadArgs {
  @TypeGraphQL.Field(_type => Product_downloadUpdateInput, {
    nullable: false
  })
  data!: Product_downloadUpdateInput;

  @TypeGraphQL.Field(_type => Product_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Product_downloadWhereUniqueInput;
}
