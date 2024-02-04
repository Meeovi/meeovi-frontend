import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_type_translationUpdateManyMutationInput } from "../../../inputs/Sales_channel_type_translationUpdateManyMutationInput";
import { Sales_channel_type_translationWhereInput } from "../../../inputs/Sales_channel_type_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySales_channel_type_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_type_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Sales_channel_type_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationWhereInput, {
    nullable: true
  })
  where?: Sales_channel_type_translationWhereInput | undefined;
}
