import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_setWhereUniqueInput } from "../../../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustom_field_setOrThrowArgs {
  @TypeGraphQL.Field(_type => Custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_field_setWhereUniqueInput;
}
