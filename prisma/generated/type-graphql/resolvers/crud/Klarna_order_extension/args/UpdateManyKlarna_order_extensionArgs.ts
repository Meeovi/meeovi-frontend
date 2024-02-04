import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_order_extensionUpdateManyMutationInput } from "../../../inputs/Klarna_order_extensionUpdateManyMutationInput";
import { Klarna_order_extensionWhereInput } from "../../../inputs/Klarna_order_extensionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyKlarna_order_extensionArgs {
  @TypeGraphQL.Field(_type => Klarna_order_extensionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Klarna_order_extensionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereInput, {
    nullable: true
  })
  where?: Klarna_order_extensionWhereInput | undefined;
}
