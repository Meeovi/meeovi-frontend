import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_typeCreateInput } from "../../../inputs/Document_typeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDocument_typeArgs {
  @TypeGraphQL.Field(_type => Document_typeCreateInput, {
    nullable: false
  })
  data!: Document_typeCreateInput;
}
