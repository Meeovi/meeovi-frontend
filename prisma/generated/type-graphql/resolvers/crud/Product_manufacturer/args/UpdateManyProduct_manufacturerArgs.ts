import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturerUpdateManyMutationInput } from "../../../inputs/Product_manufacturerUpdateManyMutationInput";
import { Product_manufacturerWhereInput } from "../../../inputs/Product_manufacturerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_manufacturerArgs {
  @TypeGraphQL.Field(_type => Product_manufacturerUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_manufacturerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  where?: Product_manufacturerWhereInput | undefined;
}
