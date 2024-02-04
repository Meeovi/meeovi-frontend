import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_fieldWhereUniqueInput } from "../../../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCustom_fieldArgs {
  @TypeGraphQL.Field(_type => Custom_fieldWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_fieldWhereUniqueInput;
}
