import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportCreateInput } from "../../../inputs/Product_exportCreateInput";
import { Product_exportUpdateInput } from "../../../inputs/Product_exportUpdateInput";
import { Product_exportWhereUniqueInput } from "../../../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_exportArgs {
  @TypeGraphQL.Field(_type => Product_exportWhereUniqueInput, {
    nullable: false
  })
  where!: Product_exportWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_exportCreateInput, {
    nullable: false
  })
  create!: Product_exportCreateInput;

  @TypeGraphQL.Field(_type => Product_exportUpdateInput, {
    nullable: false
  })
  update!: Product_exportUpdateInput;
}
