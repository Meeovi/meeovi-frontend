import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_downloadUpdateManyMutationInput } from "../../../inputs/Product_downloadUpdateManyMutationInput";
import { Product_downloadWhereInput } from "../../../inputs/Product_downloadWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_downloadArgs {
  @TypeGraphQL.Field(_type => Product_downloadUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_downloadUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_downloadWhereInput, {
    nullable: true
  })
  where?: Product_downloadWhereInput | undefined;
}
