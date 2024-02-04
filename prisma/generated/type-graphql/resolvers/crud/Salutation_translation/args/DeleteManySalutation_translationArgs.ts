import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Salutation_translationWhereInput } from "../../../inputs/Salutation_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySalutation_translationArgs {
  @TypeGraphQL.Field(_type => Salutation_translationWhereInput, {
    nullable: true
  })
  where?: Salutation_translationWhereInput | undefined;
}
