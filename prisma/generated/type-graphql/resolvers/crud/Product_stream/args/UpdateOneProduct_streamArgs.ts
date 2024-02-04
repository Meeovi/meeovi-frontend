import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_streamUpdateInput } from "../../../inputs/Product_streamUpdateInput";
import { Product_streamWhereUniqueInput } from "../../../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_streamArgs {
  @TypeGraphQL.Field(_type => Product_streamUpdateInput, {
    nullable: false
  })
  data!: Product_streamUpdateInput;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: false
  })
  where!: Product_streamWhereUniqueInput;
}
