import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_downloadCreateInput } from "../../../inputs/Product_downloadCreateInput";
import { Product_downloadUpdateInput } from "../../../inputs/Product_downloadUpdateInput";
import { Product_downloadWhereUniqueInput } from "../../../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_downloadArgs {
  @TypeGraphQL.Field(_type => Product_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Product_downloadWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_downloadCreateInput, {
    nullable: false
  })
  create!: Product_downloadCreateInput;

  @TypeGraphQL.Field(_type => Product_downloadUpdateInput, {
    nullable: false
  })
  update!: Product_downloadUpdateInput;
}
