import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_refundWhereInput } from "../../../inputs/Adyen_refundWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAdyen_refundArgs {
  @TypeGraphQL.Field(_type => Adyen_refundWhereInput, {
    nullable: true
  })
  where?: Adyen_refundWhereInput | undefined;
}
