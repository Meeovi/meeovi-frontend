import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_type_translationWhereInput } from "../../../inputs/Number_range_type_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNumber_range_type_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_type_translationWhereInput, {
    nullable: true
  })
  where?: Number_range_type_translationWhereInput | undefined;
}
