import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slotWhereInput } from "../../../inputs/Cms_slotWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCms_slotArgs {
  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  where?: Cms_slotWhereInput | undefined;
}
