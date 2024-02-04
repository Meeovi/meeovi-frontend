import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalutationCreateInput } from "../../../inputs/SalutationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSalutationArgs {
  @TypeGraphQL.Field(_type => SalutationCreateInput, {
    nullable: false
  })
  data!: SalutationCreateInput;
}
