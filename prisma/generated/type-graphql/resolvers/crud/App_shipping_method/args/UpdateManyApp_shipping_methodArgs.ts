import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_shipping_methodUpdateManyMutationInput } from "../../../inputs/App_shipping_methodUpdateManyMutationInput";
import { App_shipping_methodWhereInput } from "../../../inputs/App_shipping_methodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_shipping_methodArgs {
  @TypeGraphQL.Field(_type => App_shipping_methodUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_shipping_methodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  where?: App_shipping_methodWhereInput | undefined;
}
