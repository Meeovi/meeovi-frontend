import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutPromotion_persona_customerInput } from "../inputs/CustomerCreateWithoutPromotion_persona_customerInput";
import { CustomerUpdateWithoutPromotion_persona_customerInput } from "../inputs/CustomerUpdateWithoutPromotion_persona_customerInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutPromotion_persona_customerInput", {})
export class CustomerUpsertWithoutPromotion_persona_customerInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutPromotion_persona_customerInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutPromotion_persona_customerInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutPromotion_persona_customerInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutPromotion_persona_customerInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
