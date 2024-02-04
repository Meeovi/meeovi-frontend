import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_translationUpdateManyMutationInput } from "../../../inputs/Sales_channel_translationUpdateManyMutationInput";
import { Sales_channel_translationWhereInput } from "../../../inputs/Sales_channel_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySales_channel_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Sales_channel_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Sales_channel_translationWhereInput, {
    nullable: true
  })
  where?: Sales_channel_translationWhereInput | undefined;
}
