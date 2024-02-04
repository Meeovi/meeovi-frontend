import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_propertyUpdateManyMutationInput } from "../../../inputs/Product_propertyUpdateManyMutationInput";
import { Product_propertyWhereInput } from "../../../inputs/Product_propertyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_propertyArgs {
  @TypeGraphQL.Field(_type => Product_propertyUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_propertyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_propertyWhereInput, {
    nullable: true
  })
  where?: Product_propertyWhereInput | undefined;
}
