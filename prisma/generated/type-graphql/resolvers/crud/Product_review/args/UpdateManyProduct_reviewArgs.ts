import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_reviewUpdateManyMutationInput } from "../../../inputs/Product_reviewUpdateManyMutationInput";
import { Product_reviewWhereInput } from "../../../inputs/Product_reviewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_reviewArgs {
  @TypeGraphQL.Field(_type => Product_reviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_reviewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_reviewWhereInput, {
    nullable: true
  })
  where?: Product_reviewWhereInput | undefined;
}
