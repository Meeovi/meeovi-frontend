import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalutationWhereInput } from "../../../inputs/SalutationWhereInput";

@TypeGraphQL.ArgsType()
export class Order_customerSalutationArgs {
  @TypeGraphQL.Field(_type => SalutationWhereInput, {
    nullable: true
  })
  where?: SalutationWhereInput | undefined;
}
