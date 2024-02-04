import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_streamCreateInput } from "../../../inputs/Product_streamCreateInput";
import { Product_streamUpdateInput } from "../../../inputs/Product_streamUpdateInput";
import { Product_streamWhereUniqueInput } from "../../../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_streamArgs {
  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: false
  })
  where!: Product_streamWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_streamCreateInput, {
    nullable: false
  })
  create!: Product_streamCreateInput;

  @TypeGraphQL.Field(_type => Product_streamUpdateInput, {
    nullable: false
  })
  update!: Product_streamUpdateInput;
}
