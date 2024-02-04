import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_method_translationCreateManyInput } from "../../../inputs/Payment_method_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPayment_method_translationArgs {
  @TypeGraphQL.Field(_type => [Payment_method_translationCreateManyInput], {
    nullable: false
  })
  data!: Payment_method_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
