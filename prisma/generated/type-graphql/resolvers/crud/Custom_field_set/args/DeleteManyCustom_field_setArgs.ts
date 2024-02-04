import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_setWhereInput } from "../../../inputs/Custom_field_setWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustom_field_setArgs {
  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  where?: Custom_field_setWhereInput | undefined;
}
