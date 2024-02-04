import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportUpdateInput } from "../../../inputs/Product_exportUpdateInput";
import { Product_exportWhereUniqueInput } from "../../../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_exportArgs {
  @TypeGraphQL.Field(_type => Product_exportUpdateInput, {
    nullable: false
  })
  data!: Product_exportUpdateInput;

  @TypeGraphQL.Field(_type => Product_exportWhereUniqueInput, {
    nullable: false
  })
  where!: Product_exportWhereUniqueInput;
}
