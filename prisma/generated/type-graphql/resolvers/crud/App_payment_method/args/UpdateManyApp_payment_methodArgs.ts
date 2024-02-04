import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_payment_methodUpdateManyMutationInput } from "../../../inputs/App_payment_methodUpdateManyMutationInput";
import { App_payment_methodWhereInput } from "../../../inputs/App_payment_methodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_payment_methodArgs {
  @TypeGraphQL.Field(_type => App_payment_methodUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_payment_methodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  where?: App_payment_methodWhereInput | undefined;
}
